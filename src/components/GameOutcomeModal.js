import { Box, Button, Modal, Typography } from "@material-ui/core"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #cccccc',
    borderRadius: '16px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

const GameOutcomeModal = ({ open, message, restartGame }) => {
    return (
        <>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: '400px'}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {message}
                    </Typography>
                    <Button onClick={restartGame}>Restart Game</Button>
                </Box>
            </Modal>
        </>
    )
}

export default GameOutcomeModal