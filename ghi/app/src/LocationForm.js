import React from 'react';

class LocationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            room_count: '',
            city: '',
            states: []
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        // data.room_count = data.roomCount;
        // delete data.roomCount;
        delete data.states;
        console.log(data);

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
          const newLocation = await response.json();
          console.log(newLocation);

          const cleared = {
            name: '',
            room_count: '',
            city: '',
            state: '',
          };
          this.setState(cleared);
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ [event.target.name]: value })
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/api/states/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ states: data.states });
        }
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new location</h1>
                        <form onSubmit={this.handleSubmit} id="create-location-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Room count" required type="number" name="room_count" id="room_count" className="form-control" value={this.state.room_count} />
                                <label htmlFor="room_count">Room count</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="City" required type="text" name="city" id="city" className="form-control" value={this.state.city}/>
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} required name="state" id="state" className="form-select" value={this.state.state}>
                                    <option value="">Choose a state</option>
                                    {this.state.states.map(state => {
                                        return (
                                            <option key={state.abbreviation} value={state.abbreviation}>
                                                {state.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationForm;
