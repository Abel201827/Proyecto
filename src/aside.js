const Aside = () => {
    return <aside>
        <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">N° de celular</label>
                    <input type="text" className="form-control" id="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="modelo" className="form-label">Modelo de celular</label>
                    <input type="text" className="form-control" id="modelo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="comentarios" className="form-label">Comentarios/Experiencias</label>
                    <textarea className="form-control" id="comentarios" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
    </aside>;
}

export default Aside;