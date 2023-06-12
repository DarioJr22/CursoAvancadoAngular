import { Component, HostListener, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'mv-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  matchMedias = window.matchMedia('(prefers-color-scheme: dark)')
  darkMode:boolean = this.matchMedias.matches


  ngOnInit(): void {
    console.log(this.matchMedias.matches);

    this.getPreferenciaTema()
  }

  getPreferenciaTema(){
    this.darkMode ?? document.body.classList.toggle('dark-theme')
  }

  @Input() mode!:boolean;



  switchMode(){
    this.darkMode = !this.darkMode
    document.body.classList.toggle('dark-theme')


  }



}
/* // Check if the user has a stored preference
const storedPreference = localStorage.getItem('colorScheme');

// Set the color scheme based on the stored preference or default to light mode
if (storedPreference === 'dark') {
  content.classList.add('dark-mode');
} else {
  content.classList.add('light-mode');
}

// Update the stored preference on toggle
colorToggleBtn.addEventListener('click', () => {
  if (content.classList.contains('dark-mode')) {
    content.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('colorScheme', 'light');
  } else {
    content.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('colorScheme', 'dark');
  }
});

// Set a default color scheme if no preference is stored
if (!storedPreference) {
  content.classList.add('light-mode'); // Set default to light mode
  localStorage.setItem('colorScheme', 'light'); // Store the default preference
}
 */


 /*    if (this.darkMode) {
      localStorage.setItem('colorScheme','dark')
      document.documentElement.setAttribute('data-color-scheme', 'dark');
    }else{
      localStorage.setItem('colorScheme','light')
      document.documentElement.setAttribute('data-color-scheme', 'light');
    }
 */
