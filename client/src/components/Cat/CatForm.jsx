import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const CatForm = ({ handleSubmit, manageDialog, dialogState, updateMode }) => {
	const dialogTitle = updateMode ? 'Actualizar gato' : 'Crear gato';
	return (
		<Dialog
			open={dialogState}
			onClose={() => manageDialog(false)}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

			<DialogContent>
        Aca va redux-hook-form
		</DialogContent>
			<DialogActions>
				<Button onClick={() => manageDialog(false)} color="primary">
					Cancelar
				</Button>
				<Button onClick={() => handleSubmit()} color="primary">
					{dialogTitle}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CatForm

