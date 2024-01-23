export function render(req, res, name, title, data={}) {
    data['title'] = `${title} | Production Server`;
    data['content'] = name
    res.render("template", data)
}