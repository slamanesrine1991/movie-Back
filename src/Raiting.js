import React from 'react'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

 

class FormComponent extends React.Component {
    state = {}

  
  render() { 

    return (

        <Rater total={5} rating={0}  />

    );

  }

}
export default FormComponent;
