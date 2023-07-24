import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso3 = () => {

    const validacionPaso3 = Yup.object({
        empresa: Yup.string().required('El nombre de la empresa es requerido'),
        puesto: Yup.string().required('El puesto es requerido'),
        fechaInicio: Yup.date().required('La fecha de inicio es requerida'),
        fechaFin: Yup.date()
            .required('La fecha de fin es requerida')            
            .min(Yup.ref('fechaInicio'),'La fecha de fin debe ser posterior o igual a la fecha de inicio'),
    });

    const formik = useFormik({
        initialValues: {
            empresa: "",
            puesto: "",
            fechaInicio: "",
            fechaFin: ""
        },
        validationSchema: validacionPaso3,
        onSubmit: (values) => { console.log(values) }
    });

    return (
        <div>
            <h2>Paso 3. Experiencia laboral</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="empresa">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control
                        name="empresa"
                        type="text"
                        value={formik.values.empresa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la empresa en la que labora"
                        isInvalid={!!formik.errors.empresa && formik.touched.empresa}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.empresa}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="puesto">
                    <Form.Label>Puesto</Form.Label>
                    <Form.Control
                        name="puesto"
                        type="text"
                        value={formik.values.puesto}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese el puesto que ocupa"
                        isInvalid={!!formik.errors.puesto && formik.touched.puesto}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.puesto}
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

export default Paso3;
