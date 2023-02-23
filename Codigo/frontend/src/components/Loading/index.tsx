import Lottie from 'react-lottie';
import animationData from '../../animations/loading.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        zIndex: 100,
        position: 'absolute',

        background: 'rgba(255,255,255,0.7)',
      }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export { Loading };
