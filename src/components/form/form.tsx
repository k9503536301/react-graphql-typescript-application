import * as React from 'react';import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { addLocation } from '../../store/actions';

export interface IFormState {
    label: string
}

export interface IFormProps {
    addLocation: typeof addLocation
}

class Form extends React.Component<IFormProps, IFormState, any> {
    public state:IFormState = {
        label:''
    };

    public onLabelChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            label: e.target.value
        })
    };

    public onSubmit = (event:React.SyntheticEvent) => {
        event.preventDefault();
        const { label } = this.state;

        const location = label.toLowerCase()
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.substr(1))
            .join(' ');

        const cb = this.props.addLocation || (() => {});
        cb(location);
    };

    public render() {
        return (
            <form className="form"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="Введите локацию"/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({addLocation}, dispatch);

export default connect(null, mapDispatchToProps)(Form);