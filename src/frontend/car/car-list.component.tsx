import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {Car} from './Car';
import {CarComponent} from './car.component';

interface CarListParameters {
    makeName: string
}
interface ComponentState {
    cars: Car[];
    loading: boolean;
}

export class CarListComponent extends React.Component<RouteComponentProps<CarListParameters>, ComponentState> {

  constructor(props: RouteComponentProps<CarListParameters>) {
      super(props);

      this.state = {
          cars: [],
          loading: true
      };

      this.getByMakeName(this.props.match.params.makeName);
  }

  public render() {
      return (
        <div className='car-list-container'>
          <h2>{this.props.match.params.makeName.toUpperCase()}</h2>
          <div className='car-list'>
              {this.state.cars.map((car) => <CarComponent car={car} key={car.id}/>)}
          </div>
        </div>
      );
  }

  private getByMakeName(makeName: string) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              this.setState({
                  cars: JSON.parse(xhttp.responseText),
                  loading: false
              })
          }
      };
      xhttp.open("GET", "//localhost:3010/cars/"+ makeName , true);
      xhttp.send();
  }
}
