import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import ImageEditor from 'tui-image-editor';
import { tuiWhiteTheme } from 'assets/tui-white-theme';

@Component({
  selector: 'app-book-builder',
  templateUrl: './book-builder.component.html',
  styleUrls: ['./book-builder.component.css']
})
export class BookBuilderComponent implements OnInit {


  private _tuiImageEditor!: ImageEditor;
  constructor() {

  }
  ngOnInit() {
    this._tuiImageEditor = new ImageEditor(document.querySelector('#tuiImageEditor'), {
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      includeUI: {
        loadImage: {
          path: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          name: 'Blank'
        },
        uiSize: {
          width: "100%",
          height: "700px",
        },
        menu: [
          "crop",
          "flip",
          "rotate",
          "draw",
          "shape",
          "icon",
          "text",
          "filter",
        ],
        menuBarPosition: "bottom",
        theme: tuiWhiteTheme
      }
    });
  }

  public onGenerateImage() {
    this._tuiImageEditor.loadImageFromURL('../../assets/demo-book/a.png', 'Alphabet A').then(result => {
      // this._tuiImageEditor.ui.resizeEditor({
      //   imageSize: { oldWidth: result.oldWidth, oldHeight: result.oldHeight, newWidth: result.newWidth, newHeight: result.newHeight },
      // });
    });
  }

  public onImageSave() {

    (document.querySelector('#newImg') as any).src = this._tuiImageEditor.toDataURL()
  }

}
