/**
 * VALIDAÇÃO DE FORMULÁRIO - VERSÃO SIMPLIFICADA
 * Tamanho: ~2KB (vs 6KB da versão completa)
 * Foco: Validação básica + feedback visual
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const fields = {
        name: form.querySelector('#name'),
        email: form.querySelector('#email'),
        subject: form.querySelector('#subject'),
        message: form.querySelector('#message')
    };

    // Validar ao enviar
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    // Validar em tempo real
    Object.values(fields).forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => clearError(field));
    });

    /**
     * Validar todos os campos
     */
    function validateForm() {
        let isValid = true;

        // Validar nome
        if (!fields.name.value.trim()) {
            showError(fields.name, 'Nome é obrigatório');
            isValid = false;
        } else if (fields.name.value.trim().length < 3) {
            showError(fields.name, 'Nome deve ter no mínimo 3 caracteres');
            isValid = false;
        }

        // Validar email
        if (!fields.email.value.trim()) {
            showError(fields.email, 'Email é obrigatório');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
            showError(fields.email, 'Email inválido');
            isValid = false;
        }

        // Validar assunto
        if (!fields.subject.value.trim()) {
            showError(fields.subject, 'Assunto é obrigatório');
            isValid = false;
        } else if (fields.subject.value.trim().length < 3) {
            showError(fields.subject, 'Assunto deve ter no mínimo 3 caracteres');
            isValid = false;
        }

        // Validar mensagem
        if (!fields.message.value.trim()) {
            showError(fields.message, 'Mensagem é obrigatória');
            isValid = false;
        } else if (fields.message.value.trim().length < 10) {
            showError(fields.message, 'Mensagem deve ter no mínimo 10 caracteres');
            isValid = false;
        }

        return isValid;
    }

    /**
     * Validar campo individual
     */
    function validateField(field) {
        const value = field.value.trim();
        const id = field.id;

        let error = null;

        if (id === 'name') {
            if (!value) error = 'Nome é obrigatório';
            else if (value.length < 3) error = 'Mínimo 3 caracteres';
        } else if (id === 'email') {
            if (!value) error = 'Email é obrigatório';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email inválido';
        } else if (id === 'subject') {
            if (!value) error = 'Assunto é obrigatório';
            else if (value.length < 3) error = 'Mínimo 3 caracteres';
        } else if (id === 'message') {
            if (!value) error = 'Mensagem é obrigatória';
            else if (value.length < 10) error = 'Mínimo 10 caracteres';
        }

        if (error) {
            showError(field, error);
        } else {
            clearError(field);
        }
    }

    /**
     * Mostrar erro no campo
     */
    function showError(field, message) {
        const group = field.closest('.form-group');
        field.classList.add('error');
        group.classList.add('has-error');

        // Remover erro anterior
        const existing = group.querySelector('.error-message');
        if (existing) existing.remove();

        // Criar mensagem de erro
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.textContent = '⚠️ ' + message;
        errorMsg.style.cssText = 'color: #ff3366; font-size: 0.85rem; margin-top: 5px;';
        field.parentNode.insertBefore(errorMsg, field.nextSibling);
    }

    /**
     * Limpar erro do campo
     */
    function clearError(field) {
        const group = field.closest('.form-group');
        field.classList.remove('error');
        group.classList.remove('has-error');

        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
    }
});

/**
 * CSS para erros (adicionar ao seu style.css)
 */
const styles = `
.form-group.has-error input,
.form-group.has-error textarea {
    border-color: #ff3366 !important;
    background: rgba(255, 51, 102, 0.05) !important;
}

.form-group.has-error input:focus,
.form-group.has-error textarea:focus {
    box-shadow: 0 0 10px rgba(255, 51, 102, 0.3) !important;
}

.error-message {
    color: #ff3366;
    font-size: 0.85rem;
    margin-top: 5px;
}
`;

const sheet = document.createElement('style');
sheet.textContent = styles;
document.head.appendChild(sheet);
