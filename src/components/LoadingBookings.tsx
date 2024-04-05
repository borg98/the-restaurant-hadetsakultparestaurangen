import { Skeleton } from "@mui/material";
import "../style/loadingBookings.scss";

export function LoadingBookings() {
  return (
    <div className="loading-bookings">
      <h3 className="loading-bookings__title">Loading bookings...</h3>
      <Skeleton
        sx={{ bgcolor: "grey.900", borderRadius: "10px", margin: "10px 0" }}
        variant="rectangular"
        width={300}
        height={163}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900", borderRadius: "10px", margin: "10px 0" }}
        variant="rectangular"
        width={300}
        height={163}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900", borderRadius: "10px", margin: "10px 0" }}
        variant="rectangular"
        width={300}
        height={163}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900", borderRadius: "10px", margin: "10px 0" }}
        variant="rectangular"
        width={300}
        height={163}
      />
    </div>
  );
}
