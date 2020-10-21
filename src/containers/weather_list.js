import React from 'react'
import {connect} from 'react-redux'

import LineChart from '../components/line_chart'

class WeatherList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: []
        }

        this.renderWeather = this.renderWeather.bind(this)
    }

    renderWeather(cityData) {
        const name = cityData.city.name
        const city_data_list = cityData.list

        const temp = city_data_list.map(
            e => e.main.temp
        )

        const humidity = city_data_list.map(
            e => e.main.humidity
        )

        const pressure = city_data_list.map(
            e => e.main.pressure
        )


        const data_charts = [
            {
                data: temp,
                chart_id: 'temp'
            },
            {
                data: humidity,
                chart_id: 'humidity'
            },
            {
                data: pressure,
                chart_id: 'pressure'
            },
        ]
        
        return (
            <tr key={name}>
                <td>{name}</td>

                {
                    data_charts.map(
                        e => (
                            <td key={e.chart_id}>
                                <LineChart chart_id={e.chart_id} data={e.data} />
                            </td>
                        )
                    )
                }
                
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature </th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>

                
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList)
