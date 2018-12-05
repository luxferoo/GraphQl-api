export default (context, req, _, next) => {
    context.lang = req.acceptsLanguages()[0];
    next()
}

