import React from 'react';
import ExerciseList from '../components/ExerciseList';
import Welcome from '../components/Welcome';
import AddExercise from '../components/AddButton';
import Loading from '../components/Loading';

class Exercises extends React.Component {
 
    state = {
            data :[],
            loading: true,
            error: null
            
            
    }

    async componentDidMount(){
        await this.fetchExercises();
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();

            this.setState({
                data,
                loading: false
                
            })
        } catch(error){

        }
        
    }

    render(){
        
        if(this.state.loading)
            return <Loading />

        return(
            <div>
                <Welcome 
                    userName= "Natalia"/>
               
                <ExerciseList 
                    exercises = {this.state.data}
                />

                <AddExercise />
           
            </div>
        )
    }
             
}

export default Exercises;