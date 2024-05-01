import {Skeleton} from "@mui/material";

function SkeletonCard() {
    return (
        <div className={"col-3"} style={{border: "1px solid #efefef"}}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </div>
    );
}

export default SkeletonCard;