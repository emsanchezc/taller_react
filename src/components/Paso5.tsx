import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso5 = () => {

    const validacionPaso5 = Yup.object({
        nombre1: Yup.string().required('El nombre de referencia 1 es requerido'),
        correo1: Yup.string().required('El correo de referencia 1 es requerido'),
        telefono1: Yup.string().required('El telefono de referencia 1 es requerido'),
        nombre2: Yup.string().required('El nombre de referencia 2 es requerido'),
        correo2: Yup.string().required('El correo de referencia 2 es requerido'),
        telefono2: Yup.string().required('El telefono de referencia 2 es requerido'),
    });

    const formik = useFormik({
        initialValues: {
            nombre1: "",
            correo1: "",
            telefono1: "",
            nombre2: "",
            correo2: "",
            telefono2: ""
        },
        validationSchema: validacionPaso5,
        onSubmit: (values) => { console.log(values) }
    });

    return (
        <div>
            <h2>Paso 5. Referencias</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="nombre1">
                    <Form.Label>Nombre referencia 1</Form.Label>
                    <Form.Control
                        name="nombre1"
                        type="text"
                        value={formik.values.nombre1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese el nombre de la referencia 1"
                        isInvalid={!!formik.errors.nombre1 && formik.touched.nombre1}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.nombre1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="correo1">
                    <Form.Label>Correo referencia 1</Form.Label>
                    <Form.Control
                        name="correo1"
                        type="text"
                        value={formik.values.correo1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese el correo de la referencia 1"
                        isInvalid={!!formik.errors.correo1 && formik.touched.correo1}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.correo1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="telefono1">
                    <Form.Label>Telefono referencia 1</Form.Label>
                    <Form.Control
                        name="telefono1"
                        type="number"
                        value={formik.values.telefono1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Telefono referencia 1"
                        isInvalid={!!formik.errors.telefono1 && formik.touched.telefono1}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.telefono1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="nombre2">
                    <Form.Label>Nombre referencia 2</Form.Label>
                    <Form.Control
                        name="nombre2"
                        type="text"
                        value={formik.values.nombre2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese el nombre de la referencia 2"
                        isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.nombre2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="correo1">
                    <Form.Label>Correo referencia 2</Form.Label>
                    <Form.Control
                        name="correo2"
                        type="email"
                        value={formik.values.correo2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese el correo de la referencia 2"
                        isInvalid={!!formik.errors.correo2 && formik.touched.correo2}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.correo2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="telefono2">
                    <Form.Label>Telefono referencia 2</Form.Label>
                    <Form.Control
                        name="telefono2"
                        type="number"
                        value={formik.values.telefono2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Telefono referencia 2"
                        isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.telefono2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Siguiente</Button>
            </Form>
        </div>
    );

};

export default Paso5;