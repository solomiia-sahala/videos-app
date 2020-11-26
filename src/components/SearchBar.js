import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);


        //todo call callback from parent component;

    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.onInputChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;