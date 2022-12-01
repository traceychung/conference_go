import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConference from './AttendConference';
import PresentationForm from './PresentationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
          <Route path="attendees" element={<AttendeesList attendees={props.attendees} />} ></Route>
            <Route path="attendees">
              <Route path="new" element={<AttendConference />}></Route>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function App(props) {
//   if (props.attendees === undefined) {
//     return null;
//   }
//   root.render (); {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path='/conferences/new' element={<ConferenceForm />}></Route>
//           <Route path='/attendees/new' element={<AttendConference />}></Route>
//           <Route path='/locations/new' element={<LocationForm />}></Route>
//           <Route path='/attendees' element={<AttendeesList attendees={props.attendees} />}></Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   };
// }

export default App;
