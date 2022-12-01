import React from 'react';

class ConferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            starts: '',
            ends: '',
            max_presentations: '',
            max_attendees: '',
            description: '',
            locations: [],
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.locations;
        console.log(data);

        const confUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(confUrl, fetchConfig);
        if (response.ok) {
          const newConference = await response.json();
          console.log(newConference);

          const cleared = {
            name: '',
            starts: '',
            ends: '',
            max_presentations: '',
            max_attendees: '',
            description: '',
            location: '',
          };
          this.setState(cleared);
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ [event.target.name]: value })
    }

    async componentDidMount() {
        let locationUrl = 'http://localhost:8000/api/locations/'
        let locationResponse = await fetch(locationUrl)

        if (locationResponse.ok) {
            const data = await locationResponse.json()
            this.setState({locations: data.locations});


        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new conference</h1>
                        <form onSubmit={this.handleSubmit} id="create-conference-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChange} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control" value={this.state.starts} />
                            <label htmlFor="starts">Start date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChange} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control" value={this.state.ends} />
                            <label htmlFor="starts">End date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChange} placeholder="Maximum presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control" value={this.state.max_presentations} />
                            <label htmlFor="max_presentations">Max presentations</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChange} placeholder="Maximum attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control" value={this.state.max_attendees} />
                            <label htmlFor="max_attendees">Max attendees</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea onChange={this.handleChange} required name="description" id="description" className="form-control" rows="3" value={this.state.description}></textarea>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleChange} required name="location" id="location" className="form-select" value={this.state.location}>
                                <option value="">Choose a location</option>
                                {this.state.locations.map(location => {
                                    return (
                                        <option key={location.id} value={location.id}>
                                            {location.name}
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
                </div>
        );
    }
}

export default ConferenceForm;
