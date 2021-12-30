import React, { Component } from "react";
import style from './Auditorium.module.css'

class Auditorium extends Component {

    constructor(props) {
        super(props)
        this.state = {
            room: []
        }
    }

    async requestAPI() {
        const api = await fetch (`https://cinema-aud-m4.herokuapp.com/auditorium`)
        const json = await api.json()
        return json
    }
    
    async componentDidMount(){
        this.setState({
            room: await this.requestAPI()
        })
    }

    componentDidUpdate() {
        console.log(this.state.room)
    }

    render() {
        return(
            <main>
                    <div className={style.totalContainer}>
                        <ul className={style.seatsContainer}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                <li>32</li>
                                <li>33</li>
                                <li>34</li>
                                <li>35</li>
                                <li>36</li>
                                <li>37</li>
                                <li>38</li>
                                <li>39</li>
                                <li>40</li>
                        </ul>
                    </div>
                    
                    <div className={style.statusContainer}>
                        <ul>
                            <li className={style.disponivel}>Disponível</li>
                            <li className={style.reservado}>Reservado</li>
                            <li className={style.selecionado}>Selecionado</li>
                        </ul>
                    </div>

    </main>

        )
    }

}

export default Auditorium;
