class CreateUserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!req.body) {
      return res.json({ error: 'Missing required fields' }, { status: 404 });
    }

    // chamar serviço

    return null;
  }
}

export default CreateUserController;
