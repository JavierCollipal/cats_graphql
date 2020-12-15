import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CatForm from './CatForm';
import CatList from './CatList';
import {defaultCatImg, mockCatData} from '../../utils/mock/cats';
import Skeleton from '@material-ui/lab/Skeleton';

const Cats = () => {
  const [cats, setCats] = useState(mockCatData);
  const [loading, setLoading]  = useState();
  const [error, setError] = useState();
	const [formData, setFormData] = useState();
	const [dialog, setDialog] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);

	const fetchCats = () => {};
  const addCat = cat => {};
  const deleteCat = catId => {};
  const updateCat = (catData,catId) => {};

	const handleUpdate = cat => {
		setFormData(cat);
		setUpdateMode(true);
		//ver como pasarle los valores a form redux para actualizar el gato
		setDialog(true);
	};
	const handleDelete = catId => {
		deleteCat(catId);
	};
	const handleCreate = () => {
		setFormData(null);
		setDialog(true);
		setUpdateMode(false);
	};
	const handleFormSubmit = payload => {
	if (updateMode) payload = { ...payload, id: formData._id };
	else payload = { ...payload, imageUrl: defaultCatImg };
	setDialog(false);
	updateMode ? updateCat(payload) : addCat(payload);
	};

  //simulamos componentDidMount con un arreglo en blanco como segundo parametro,
	//en este caso lleva la funcion fetchCat por recomendación del linter

	return (
		<div>
			{loading ? (
				<Skeleton animation="wave" />
			) : (
				<div>
					<Button color="primary" onClick={handleCreate} data-cy="catAddButton">
						Añade un nuevo gato
					</Button>
					<CatList cats={cats} handleDelete={handleDelete} handleUpdate={handleUpdate} />
				</div>
			)}

			<CatForm
				onSubmit={handleFormSubmit}
				manageDialog={setDialog}
				dialogState={dialog}
				updateMode={updateMode}
				initialValues={formData}
			/>
		</div>
	);
};

export default Cats
