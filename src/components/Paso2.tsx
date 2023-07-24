import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso2 = () => {

    const validacionPaso2 = Yup.object({
        institucion: Yup.string().required('La institución es requerida'),
        carrera: Yup.string().required('La carrera es requerida'),
        fechaInicio: Yup.date().required('La fecha de inicio es requerida'),
        fechaFin: Yup.date()
            .required('La fecha de fin es requerida')            
            .min(Yup.ref('fechaInicio'),'La fecha de fin debe ser posterior o igual a la fecha de inicio'),
    });

    const formik = useFormik({
        initialValues: {
            institucion: "",
            carrera: "",
            fechaInicio: "",
            fechaFin: ""
        },
        validationSchema: validacionPaso2,
        onSubmit: (values) => { console.log(values) }
    });

    return (
        <div>
            <h2>Paso 2. Formación Académica</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="institucion">
                    <Form.Label>Institución</Form.Label>
                    <Form.Control
                        name="institucion"
                        type="text"
                        value={formik.values.institucion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la institución"
                        isInvalid={!!formik.errors.institucion && formik.touched.institucion}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.institucion}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="carrera">
                    <Form.Label>Carrera</Form.Label>
                    <Form.Control
                        name="carrera"
                        type="text"
                        value={formik.values.carrera}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la carrera"
                        isInvalid={!!formik.errors.carrera && formik.touched.carrera}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.carrera}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="fechaInicio">
                    <Form.Label>Fecha de Inicio</Form.Label>
                    <Form.Control
                        name="fechaInicio"
                        type="date"
                        value={formik.values.fechaInicio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la fecha de inicio"
                        isInvalid={!!formik.errors.fechaInicio && formik.touched.fechaInicio}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.fechaInicio}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="fechaFin">
                    <Form.Label>Fecha de Fin</Form.Label>
                    <Form.Control
                        name="fechaFin"
                        type="date"
                        value={formik.values.fechaFin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la fecha de fin"
                        isInvalid={!!formik.errors.fechaFin && formik.touched.fechaFin}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.fechaFin}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Siguiente</Button>
            </Form>
        </div>
    );

};

export default Paso2;
