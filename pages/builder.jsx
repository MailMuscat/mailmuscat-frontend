import { useState, useEffect } from 'react';

import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import blockBasic from "grapesjs-blocks-basic"
import { MdApps } from "react-icons/md";
import { FaLayerGroup, FaPaintBrush } from "react-icons/fa";
import { VscSymbolProperty } from "react-icons/vsc";
import { blocks } from '../helper/blocks';

// if (typeof window !== 'undefined') {
//   blockBasic = require('grapesjs-blocks-basic')

// }

const builder = () => {
  const [editor, setEditor] = useState(null)
  const [openTab, setOpenTab] = useState("blocks")


  useEffect(() => {

    const editor = grapesJS.init({
      container: '#editor',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // plugins: [blockBasic],
      // pluginsOpts: {
      //   'gjs-blocks-basic': {},
      // },
      blockManager: {
        appendTo: '#blocks',
        blocks: blocks,
      },
      layerManager: {
        appendTo: '#layers'
      },
      styleManager: {
        appendTo: '#styles-container'
      },
      traitManager: {
        appendTo: "#trait"
      },
      panels: {
        defaults: [
          {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
              {
                id: 'visibility',
                active: true, // active by default
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-clone"></i>',
                command: 'sw-visibility', // Built-in command
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: '<i class="fa fa-television"></i>',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-tablet',
                label: '<i class="fa fa-tablet"></i>',
                command: 'set-device-tablet',
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: '<i class="fa fa-mobile"></i>',
                command: 'set-device-mobile',
                togglable: false,
              },

            ],
          },
        ],
      },
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px',
          },

          {
            name: 'Tablet',
            width: '768px',
            widthMedia: '900px',
          },
        ],
      },


    });


    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });
    editor.Commands.add('set-device-tablet', {
      run: editor => editor.setDevice('Tablet')
    });

    const component = editor.addComponents(`<div>
    <img src="https://path/image" />
    <span title="foo">Hello world!!!</span>
  </div>`)[0];
  }, [])


  return (
    <>
      <div className='flex bg-darkBlue'>
        <div className="sidebar md:w-1/5 ">

          <div className='flex justify-around p-1'>
            <button className='p-1 text-white hover:text-lightGreen' onClick={() => setOpenTab("blocks")}><MdApps/></button>
            <button className='p-1 text-white hover:text-lightGreen' onClick={() => setOpenTab("layers")}><FaLayerGroup/></button>
            <button className='p-1 text-white hover:text-lightGreen' onClick={() => setOpenTab("styles")}><FaPaintBrush/></button>
            <button className='p-1 text-white hover:text-lightGreen' onClick={() => setOpenTab("trait")}><VscSymbolProperty/></button>



          </div>

          <div className='panel__top'>
            <div className={openTab === "blocks" ? 'inline' : 'hidden'} id="blocks"></div>
            <div className={openTab === "layers" ? 'inline' : 'hidden'} id="layers"></div>
            <div className={openTab === "styles" ? 'inline' : 'hidden'} id="styles-container"></div>
            <div className={openTab === "trait" ? 'inline' : 'hidden'} id="trait"></div>

          </div>
        </div>

        <div className='w-4/5 '>
          <div className='flex justify-between absolute w-4/5'>
            <div className="panel__devices "></div>
            <div className="panel__basic-actions "></div>
          </div>

          <div id="editor" className='block w-4/5'></div>
        </div>
      </div>
    </>
  )
}

export default builder