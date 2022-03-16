const Alert = ({ alert }) => {
  return (
    <div className={ `${ alert.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600' }
                     bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10` }>
      { alert.message }
    </div>
  );
}

export default Alert