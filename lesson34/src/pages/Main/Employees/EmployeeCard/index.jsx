import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export default function EmployeeCard({employee}) {
    return (
        <div className={"col-4"}>
            <Card sx={{width: '100%'}}>
                <CardMedia
                    sx={{height: 300}}
                    image={employee.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {employee.name + " " + employee.surname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            Age: {employee.age}
                        </div>
                        <div>
                            Position: {employee.position}
                        </div>
                        <div>
                            Salary: {employee.salary}
                        </div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Details</Button>
                </CardActions>
            </Card>
        </div>
    );
}

EmployeeCard.propTypes = {
    employee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};