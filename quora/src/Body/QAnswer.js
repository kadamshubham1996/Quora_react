import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'


export default class Answer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitClick=this.handleSubmitClick.bind(this);
    }
    handleSubmitClick(){
        const qId=this.props.questionId;
        alert(this.answerField.value +""+qId)
    }
    render(){
        return( <div>
        <Form inline>
        <FormGroup >  <FormControl
                                                    type="text"
                                                    placeholder="answerField"
                                                    inputRef={(ref)=>{this.answerField=ref}}
                                                />
                                                </FormGroup>
              <Button type="submit" onClick={this.handleSubmitClick}>Submit</Button>                              
        </Form>
        </div>
            )    }
}