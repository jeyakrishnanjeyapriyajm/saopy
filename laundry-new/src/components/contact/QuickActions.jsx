import Container from "../common/Container";

export default function QuickActions() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-3xl border p-6">
          <h2 className="text-2xl font-bold">Quick Actions</h2>
          <p className="mt-2 text-sm text-gray-600">
            Call us, send a message, or request a pickup.
          </p>
        </div>
      </Container>
    </section>
  );
}
