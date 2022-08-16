import React from "react";
import * as C from './ListUserStyles';

const ListUser = ({ user, foto }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PFP = process.env.REACT_APP_PERSON_FOLDER;

    return (
        <C.Container>
            <C.Wrapper>
                <C.WrapperImg>
                    <img
                        src={
                            foto
                                ? PFP + foto
                                : PF + "person/noAvatar.png"
                            }
                        alt="" width={30}
                    />
                </C.WrapperImg>
                <C.NavLink to={`/profile/${user}`}>{user}</C.NavLink>
            </C.Wrapper>
        </C.Container>
    )
}

export default ListUser;