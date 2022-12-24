import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import ImageEditor from 'tui-image-editor';
import { tuiWhiteTheme } from 'assets/tui-white-theme';
import { fabric } from 'fabric';
import FilerobotImageEditor from 'filerobot-image-editor';


@Component({
  selector: 'app-book-builder',
  templateUrl: './book-builder.component.html',
  styleUrls: ['./book-builder.component.css']
})
export class BookBuilderComponent implements OnInit {
  private editor: FilerobotImageEditor;
  constructor() {
    
  }
  ngOnInit() {
    const canvas = new fabric.Canvas('canvas');
  const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red',
  });
  canvas.add(rect);
  }

  public onGenerateImage() {
    // this._tuiImageEditor.loadImageFromURL('../../assets/demo-book/a.png', 'Alphabet A').then(result => {
    //   // this._tuiImageEditor.ui.resizeEditor({
    //   //   imageSize: { oldWidth: result.oldWidth, oldHeight: result.oldHeight, newWidth: result.newWidth, newHeight: result.newHeight },
    //   // });
    // });
    
  }

  public onImageSave() {

    // (document.querySelector('#newImg') as any).src = this._tuiImageEditor.toDataURL()
  }

}
