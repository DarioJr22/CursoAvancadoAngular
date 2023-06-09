import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { EstudoPipesService } from './estudo-pipes.service';

// TODO: Replace this with your own data model type
export interface ApiReturn {
  albumId: number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
  dineiro:number;
  bites:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ApiReturn[] = [];

/**
 * Data source for the MvTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MvTableDataSource extends DataSource<ApiReturn> {
  data: ApiReturn[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  dataObserver:Observable<any> = new Observable();

  constructor( private jsonService:EstudoPipesService) {
    super();

    this.getPipeData();

  }
  getPipeData(){
    this.jsonService.getPhotos().subscribe({
      next:(data:any)=>{
        this.data = this.handleData(data);
        console.log("Agora !!!!");

      },
      error:(err)=>{
        console.log(err);

      }
    }
  )
}


handleData(data:ApiReturn[]){
  data.forEach(element => {
    element.dineiro = 20.44231;
    element.bites = 543109789;
  })
  return data;
}


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ApiReturn[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ApiReturn[]): ApiReturn[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ApiReturn[]): ApiReturn[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
