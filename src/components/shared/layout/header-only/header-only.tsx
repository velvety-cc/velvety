import Header from '../../header/header';

export default function HeaderOnly({ children }) {
    return (
        <>
            <Header></Header>
            <div>{children}</div>
        </>
    );
}
