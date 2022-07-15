
export const blocks = [
    {
        id: 'section', // id is mandatory
        label: '<b>Section</b>', // You can use HTML/SVG inside labels
        attributes: { class:'gjs-block-section'},
        content: ``,
      }, {
        id: 'text',
        label: 'Text',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      }, 

      {
        id:"mjml",
        label:'Mjml',
        content:`<mjml>
        <mj-body>
          
        </mj-body>
      </mjml>`

      },{
        id:'mjml-section',
        label:"Mjml-section",
        content:`<mj-section></mj-section`
      }
]



            // <mj-column>
            //   <mj-image width="100px" src="https://mjml.io/assets/img/logo-small.png"></mj-image>
            //   <mj-divider border-color="#F45E43"></mj-divider>
            //   <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
            // </mj-column>
   