import { v4 as uuid } from 'uuid';
import {
    Card,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const labelings = [
    {
        id: uuid(),
        px:679,
        py:439,
        pw:51,
        ph:44,
        class_id:0,
        class_name:"car",
        color:"#f44336"
    },
    {
        id: uuid(),
        px:553,
        py:335,
        pw:126.66666666666669,
        ph:91.66666666666669,
        class_id:0,
        class_name:"car",
        color:"#f44336"
    }
];

const LabelingList = (props) => (
    <Card {...props}>
        <CardHeader
            subtitle={`${labelings.length} in total`}
            title="Labeling"
        />
        <Divider />
        <List>
            {labelings.map((labeling, i) => (
                <ListItem
                    divider={i < labelings.length - 1}
                    key={labeling.id}
                >
                    <ListItemAvatar>
                        <img
                            alt={labeling.class_name}
                            style={{
                                height: 48,
                                width: 48
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={labeling.class_name}
                        secondary={`Color ${labeling.color}`}
                    />
                    <IconButton aria-label="reset" style={{ color: yellow[700] }}>
                        <AutorenewIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    </Card>
);

export default LabelingList;
