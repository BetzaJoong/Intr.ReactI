import Badge from 'react-bootstrap/Badge';

const Tags = ({ bg, text }) => {
    return (
        <>
            <Badge bg={bg}> {text} </Badge>
        </>
    )
};

export default Tags;