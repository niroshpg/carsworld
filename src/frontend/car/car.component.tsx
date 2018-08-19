import * as React from 'react';
import {Car} from './car';

interface ComponentProps {
    car: Car;
}

export class CarComponent extends React.Component<ComponentProps, {}> {
    public render() {
        return (
            <section className='car'>
                <h3> {this.props.car.modelName} <span>{this.props.car.makeName}</span></h3>
                <p>${this.props.car.price} drive away</p>
            </section>
        );
    }
}
