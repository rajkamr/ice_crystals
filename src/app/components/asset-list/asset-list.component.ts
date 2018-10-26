import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  constructor() { }
  public assetList = [
    {
      "name": "Backhoe Loaders",
      "imageUrl": "backhoe_loaders.jpeg"
    },
    {
      "name": "Compactors",
      "imageUrl": "compactors.jpeg"
    },
    {
      "name": "Excavator",
      "imageUrl": "excavator.jpeg"
    },
    {
      "name": "Forest Machines",
      "imageUrl": "forest_machine.jpeg"
    }
  ];
  ngOnInit() {
  }

}
