from datetime import datetime, timezone

from sqlalchemy.orm import Session

from ..models.user import User
from ..schemas.auth import RegisterRequest
from ..security.jwt import hash_password, verify_password


def register_user(db: Session, request: RegisterRequest) -> User:
	existing_user = db.query(User).filter(
		(User.email == request.email) | (User.name == request.name)
	).first()
	if existing_user:
		raise ValueError("A user with that name or email already exists")

	now = datetime.now(timezone.utc).replace(tzinfo=None)
	user = User(
		name=request.name,
		email=request.email,
		hashed_password=hash_password(request.password),
		enabled=request.enabled,
		created_at=now,
		updated_at=now,
	)
	db.add(user)
	db.commit()
	db.refresh(user)
	return user


def authenticate_user(db: Session, email: str, password: str) -> User | None:
	user = db.query(User).filter(User.email == email).first()
	if not user or not verify_password(password, user.hashed_password):
		return None
	return user
