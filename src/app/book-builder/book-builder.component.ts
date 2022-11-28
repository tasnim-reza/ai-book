import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import FilerobotImageEditor from 'filerobot-image-editor'; // Load library from NPM
import { FilerobotImageEditorConfig } from 'react-filerobot-image-editor';
@Component({
  selector: 'app-book-builder',
  templateUrl: './book-builder.component.html',
  styleUrls: ['./book-builder.component.css']
})
export class BookBuilderComponent implements OnInit {
  constructor() {
    
  }
  ngOnInit() {
    // or load from CDN as following and use (window.FilerobotImageEditor):
    // <script src="https://scaleflex.cloudimg.io/v7/plugins/filerobot-image-editor/latest/filerobot-image-editor.min.js"></script>
    
const { TABS, TOOLS } = FilerobotImageEditor as any;
    
    const config: any = {
      source: 'https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg',
      onSave: (editedImageObject, designState) =>
        console.log('saved', editedImageObject, designState),
      annotationsCommon: {
        fill: '#ff0000',
      },
      Text: { text: 'Filerobot...' },
      Rotate: { angle: 90, componentType: 'slider' },
      translations: {
        profile: 'Profile',
        coverPhoto: 'Cover photo',
        facebook: 'Facebook',
        socialMedia: 'Social Media',
        fbProfileSize: '180x180px',
        fbCoverPhotoSize: '820x312px',
      },
      Crop: {
        presetsItems: [
          {
            titleKey: 'classicTv',
            descriptionKey: '4:3',
            ratio: 4 / 3 as any,
            // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
          },
          {
            titleKey: 'cinemascope',
            descriptionKey: '21:9',
            ratio: 21 / 9,
            // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
          },
        ],
        presetsFolders: [
          {
            titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
            // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
            groups: [
              {
                titleKey: 'facebook',
                items: [
                  {
                    titleKey: 'profile',
                    width: 180,
                    height: 180,
                    descriptionKey: 'fbProfileSize',
                  },
                  {
                    titleKey: 'coverPhoto',
                    width: 820,
                    height: 312,
                    descriptionKey: 'fbCoverPhotoSize',
                  },
                ],
              },
            ],
          },
        ],
      },
      tabsIds: [TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK], // or ['Adjust', 'Annotate', 'Watermark']
      defaultTabId: TABS.ANNOTATE, // or 'Annotate'
      defaultToolId: TOOLS.TEXT, // or 'Text'
    };
    
    // Assuming we have a div with id="editor_container"
    const filerobotImageEditor = new FilerobotImageEditor(
      document.querySelector('#editor_container'),
      config,
    );
    
    filerobotImageEditor.render({
      onClose: (closingReason) => {
        console.log('Closing reason', closingReason);
        filerobotImageEditor.terminate();
      },
    } as unknown as FilerobotImageEditorConfig);
  }

  public onGenerateImage() {
    // this._tuiImageEditor.loadImageFromURL('../../assets/demo-book/a.png', 'Alphabet A').then(result => {
      
    // });
  }

  public onImageSave() {

    // (document.querySelector('#newImg') as any).src = this._tuiImageEditor.toDataURL()
  }

}
