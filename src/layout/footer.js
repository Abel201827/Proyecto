const Footer = () => {
    return (
        <footer data-bs-theme="dark" className="bd-footer py-4 py-md-5 bg-body-tertiary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Sobre Nosotros</h5>
                        <p>Descubre más sobre nosotros y nuestra misión en la industria de la tecnología móvil.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Productos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Tabletas</a></li>
                            <li><a href="#">Accesorios</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacto</h5>
                        <p>¡Contáctanos para obtener más información sobre nuestros comparaciones y esperiencias!</p>
                    </div>
                </div>
                <hr />
                <div>
                    <p>&copy; {new Date().getFullYear()} PRIME TECHNOLOGY. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;