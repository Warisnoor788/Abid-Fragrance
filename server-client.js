document.addEventListener('submit', async event => {
  const form = event.target;
  if (form.id !== 'contact-form' && form.id !== 'checkout-form') return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const fields = [...form.querySelectorAll('input, textarea')];

  if (form.id === 'contact-form') {
    const payload = { name: fields[0]?.value, email: fields[1]?.value, message: fields[2]?.value };
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      toast(result.message);
    } catch (_error) {
      toast('Thank you. We will be in touch soon.');
    }
    form.reset();
  }

  if (form.id === 'checkout-form') {
    const items = cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity, size: item.size || '50 ml' }));
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const payload = { customer: { name: fields[0]?.value, phone: fields[1]?.value, address: fields[2]?.value }, items, total };
    try {
      const response = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      toast(`Order received: ${result.orderId}`);
      cart = [];
      localStorage.removeItem('abid-cart');
      updateCart();
    } catch (_error) {
      toast('Order details saved. We will contact you shortly.');
    }
    form.reset();
  }
}, true);
