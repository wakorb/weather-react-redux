import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'
import { Sparklines } from 'react-sparklines';
import { SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temps} width={180} height={120}>
                        <SparklinesLine color='blue'/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={humidities} width={180} height={120}>
                        <SparklinesLine color='green'/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={pressures} width={180} height={120}>
                        <SparklinesLine color='red'/>
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
                
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);