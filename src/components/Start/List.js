import {List, ListItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

function SideList () {
    return (
        <List className={`list-container`}>

            <ListItem className={`list`}>
                <Typography
                    variant="h3"
                    className={`title-list`}
                >
                    Unlock the power of AI with Vector Search
                </Typography>
            </ListItem>

            <ListItem>
                <Typography
                    variant={`body1`}
                    className={`learn-more`}
                >
                    Introducing Vector Search. Build intelligent applications powered by
                    semantic search and generative AI over any type of data.
                </Typography>
            </ListItem>

            <ListItem>
                <Typography
                    variant={`body1`}
                    className={`learn-more learn-more-small`}
                >
                    <Link
                        to={`/join`}
                        className={`subtitle-link`}
                    >
                        Learn more
                    </Link>
                </Typography>
            </ListItem>

        </List>
    )
}

export default SideList;

