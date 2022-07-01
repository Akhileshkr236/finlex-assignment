import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = false;
  public isCollapsed3 = true;
  public features: any  = [
    {
      icon: 'icon-edit-pencil',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-reload',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-check-list',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-diamond',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-tools',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-user-group',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-building',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-briefcase',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-analytics',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-euro',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-building',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'icon-briefcase',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
