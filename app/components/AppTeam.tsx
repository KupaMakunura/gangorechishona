import { Card } from "react-daisyui"
import classNames from "classnames"
import { TeamList } from "../constants"


const AppTeam = () => {
    return (
        <>
            {
                TeamList.map((member, index) => (
                    <Card  key={index} className={classNames({
                        'h-fit md:w-[250px] max-md:w-full card shadow-lg rounded-xl pb-5': true,
                    })}>

                        <Card.Image   src={member.img} className={classNames({
                            "h-[200px] w-full  border-b-[0.5px] pb-1  image-full": true,
                        })} />

                        <Card.Body className="px-2 mt-3">
                            <Card.Title className={classNames({
                                "truncate mt-2 w-full text-center  text-sm ": true,
                            })}>{member.name}</Card.Title>
                            <span className="flex justify-center  text-sm" >{member.role}</span>

                        </Card.Body>
                    </Card>
                ))
            }

        </>
    )
}

export default AppTeam