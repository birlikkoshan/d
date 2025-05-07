const Logo = (props) => {
    const {url, style} = props;
    return <img className="logo-img" 
    style={{
        width: style?.width || 40, 
        height: style?.height, 
        margin: 5, position: 'relative', 
        top: style?.top || 0
    }} src={url} />
}

export default Logo;