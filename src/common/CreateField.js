import React from 'react';

export default class CreateField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    onSubmit(e) {
        let value = this.props.create(this.state.value);
        this.setState({value: value || ""});
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ e => this.onSubmit(e) }>
                <div className="field has-addons is-fullwidth" >
                    <p className="control is-expanded">
                        <input className="input" type="text" 
                            placeholder={ this.props.placeholder } value={ this.state.value } 
                            onChange={ e => this.setState({value: e.target.value}) } />
                    </p>
                    <p className="control">
                        <button type="submit" className="button is-primary">{ this.props.label || 'Add' }</button>
                    </p>
                </div>
            </form>
        );
    }

};