import React from 'react'

const LmsFooter = (props) => {


    return(
        <div>
            <footer className="bg-dark text-white text-center p-3 mt-3">
                <p>&copy; 2021 {props.data.name_1} All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default LmsFooter;