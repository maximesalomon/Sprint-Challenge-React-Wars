import React from 'react';
import './StarWars.css';

export default function Table(props) {
    return (
        <div className="table">
            <div className="table_headers">
                <div className="table_header_name">Name</div>
                <div className="table_header">Gender</div>
                <div className="table_header">Birth Year</div>
                <div className="table_header">Height</div>
                <div className="table_header">Mass</div>
                <div className="table_header">Hair Color</div>
                <div className="table_header">Eye Color</div>
                <div className="table_header_skin_color">Skin Color</div>
            </div>
            <div className="table_rows">
            {
                props.starwarsChars.map((char, idx) => (
                    <div className="table_row">
                        <div className="table_item_name" key={ idx }> { char.name } </div>
                        <div className="table_item" key={ idx }> { char.gender } </div>
                        <div className="table_item" key={ idx }> { char.birth_year } </div>
                        <div className="table_item" key={ idx }> { char.height } </div>
                        <div className="table_item" key={ idx }> { char.mass } </div>
                        <div className="table_item" key={ idx }> { char.hair_color } </div>
                        <div className="table_item" key={ idx }> { char.eye_color } </div>
                        <div className="table_item_skin_color" key={ idx }> { char.skin_color } </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
};