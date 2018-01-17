export default function ({ store, redirect, error }) {
  console.log(2, store.state.user);
  if (!store.state.user) {
    redirect('/login')
  }
}
